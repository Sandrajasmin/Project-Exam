import PropTypes from 'prop-types';

const LogoutBtn = ({ handleLogout }) => {
    return (
        <div>
            <button onClick={handleLogout} className="font-body text-sm">
                Log out
            </button>
        </div>
    );
};

LogoutBtn.propTypes = {
    handleLogout: PropTypes.func.isRequired
};

export default LogoutBtn;
