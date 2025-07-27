import './ButtonToggle.scss';

const ButtonToggle = ({ isActive, setIsActive, disabled = false }) => {
    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={isActive}
                onChange={(e) => setIsActive?.(e.target.checked)}
                disabled={disabled}
            />
            <span class="slider round"></span>
        </label>
    );
};

export default ButtonToggle;
