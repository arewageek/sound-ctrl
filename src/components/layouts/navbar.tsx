import GlitchButton from "../buttons/glitch-button"

const Navbar = () => {
    return (
        <div className="py-5 px-8 flex items-center justify-between">
            <div>
                Sound CTRL
            </div>
            <div>
                <GlitchButton text="Waitlist" />
            </div>
        </div>
    )
}

export default Navbar