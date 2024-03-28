import { useEffect } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";



export default function isAuth(Component) {
  const role2Paths = ['/usage-overview', '/price-config']
  const role3Paths = ['/business-overview', 'customer-analytics', 'user-management']
  

  return function IsAuth(props) {
    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
      const token = localStorage.getItem('token');
      const role_id = localStorage.getItem('role_id');
      if (!token) {
        console.log("you have no token");
        router.replace('/')
      } else {
        if (role_id == 3 &&  role3Paths.includes(pathname)) {
          router.replace(pathname)
        } else if (role_id == 2 &&  role2Paths.includes(pathname)) {
          router.replace(pathname)
        } else {
          console.log("you have no access");
          router.replace('/')
        }
      }
    }, [pathname]);

    return <Component {...props} />;
  };
}
