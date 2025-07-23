import './ButtonToggle.scss';

const ButtonToggle = ({ isActive, setIsActive }) => {
    return (
        <label class="switch">
            <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
            <span class="slider round"></span>
        </label>
    );
};

export default ButtonToggle;
