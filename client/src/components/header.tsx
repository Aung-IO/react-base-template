
import UserProfile from "../images/user.png"
export default function Header() {
    return (
      <div className="flex bg-primary-nav mb-3 p-4">
        {/* Left section with Username and Role */}
       
        
        {/* Right section with Profile Image (UserIcon) */}
        <div className="ml-auto flex items-center gap-5 mr-5">
        <div>
          <h1 className="text-lg font-semibold">John Doe</h1>
          <h3 className="text-sm text-gray-500">Admin</h3>
        </div>
          <img src={UserProfile} alt="profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    );
  }
  