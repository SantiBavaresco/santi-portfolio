// Import the required modules
import Image from "next/image"

export default function ImageCarousel({ keydiv, image}) {
    return (
        <div key={keydiv}>
            <a className="flex">
                <Image 
                    className="rounded-lg object-cover" 
                    width={"100%"} 
                    height={"100%"} 
                    placeholder="blur"
                    src={image}
                    alt={keydiv} 
                />
            </a>
        </div>
    );
}