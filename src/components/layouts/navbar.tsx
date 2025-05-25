import Image from "next/image"
import GlitchButton from "../buttons/glitch-button"

const Navbar = () => {
    return (
        <div className="py-5 px-8 flex items-center justify-between">
            <div>
                <Image alt="Sound Ctrl" height={50} width={100} src="/attachments/logo.png" />
            </div>
            <div>
                <GlitchButton text="Waitlist" />
            </div>
        </div>
    )
}

export default Navbar