import useImage from "../hooks/useImage";

interface ImageProps {
    champion: any
}

export default function Image(props: ImageProps) {
    const { image } = useImage(props.champion)
    return <img src={image} />
}