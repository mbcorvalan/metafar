import { ButtonLayoutProps } from '../types/props';

const ButtonLayout: React.FC<ButtonLayoutProps> = ({ label, icon, ...props }) => {
    return (
        <button className="button" {...props}>
            {icon && <span className="button-icon">{icon}</span>}
            {label && <span className="button-label">{label}</span>}
        </button>
    );
};

export default ButtonLayout;
