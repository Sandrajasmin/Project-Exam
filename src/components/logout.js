import PropTypes from 'prop-types';

const LogoutBtn = ({ handleLogout }) => {
    return (
        <div>
            <button
                onClick={handleLogout}
                className="bg-darkBlue px-4 py-2 font-body text-sm font-medium text-white shadow-sm shadow-slate-500"
            >
                Log out
            </button>
        </div>
    );
};

LogoutBtn.propTypes = {
    handleLogout: PropTypes.func.isRequired
};

export default LogoutBtn;
