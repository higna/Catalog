import traceback
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager
from django_rest_passwordreset.signals import reset_password_token_created
from django.dispatch import receiver
from django.urls import reverse
from django.template.loader import render_to_string
from django.core.mail import EmailMultiAlternatives
from django.utils.html import strip_tags
from django.conf import settings
from dotenv import load_dotenv

load_dotenv()


class CuistomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email is required')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    date_of_birth = models.DateField(null=True, blank=True)
    username = None
    
    objects= CuistomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


@receiver(reset_password_token_created)
def password_reset_token_created(reset_password_token, *args, **kwargs):
    sitelink = "http://localhost:3000/"
    token = "?token={}".format(reset_password_token.key)
    full_link = str(sitelink)+str("password-reset")+str(token)
    
    print(full_link)
    print(token)
    
    context ={
        'full_link': full_link,
        'email_address': reset_password_token.user.email
    }
    
    html_message = render_to_string("backend/email.html", context=context)
    plain_message = strip_tags(html_message)
    
    message = EmailMultiAlternatives(
        subject= "Password Reset Request for {title}".format(title=reset_password_token.user.email),
        body= plain_message,
        from_email= settings.EMAIL_HOST_USER,
        to= [reset_password_token.user.email]
    )
    message.attach_alternative(html_message, "text/html")
    try:
        message.send(fail_silently=False)
    except Exception as e:
        print("EMAIL ERROR: \n", traceback.format_exc())