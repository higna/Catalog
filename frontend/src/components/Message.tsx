import { Box } from "@mui/material"

interface MessageProps {
    text: string;
}
export default function Message7({ text }: MessageProps) {
    return (
        <Box sx={{
            backgroundColor: '#69C9AB',
            color: 'black',
            fontWeight: 'bold',
            width: '90%',
            height: '40px',
            position: 'absolute',
            top: '100px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
            {text}
        </Box>
    )
}
