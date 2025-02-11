import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Breadcrumb = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    
    // Generate breadcrumb items
    const breadcrumbItems = pathnames.map((name, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      return { label: name.charAt(0).toUpperCase() + name.slice(1), path };
    });

    // Update document title dynamically based on the last breadcrumb
    if (breadcrumbItems.length > 0) {
      document.title = breadcrumbItems[breadcrumbItems.length - 1].label + " | My Website";
    } else {
      document.title = "Home | My Website";
    }

    setBreadcrumbs(breadcrumbItems);
  }, [location]);

  return (
    <div className="bg-white dark:bg-dark">
      <div className="container">
        <div className="w-full mb-8">
          <div className="px-4 py-4 border rounded-lg border-light bg-primary shadow-1 dark:shadow-card dark:border-transparent sm:px-6 md:px-8 md:py-5">
            <ul className="flex items-center text-white">
              {/* Home Link */}
              <li className="flex items-center">
                <Link to="/" className="flex items-center text-base font-medium hover:text-opacity-80">
                  <FaHome className="mr-2" />
                  Home
                </Link>
                {breadcrumbs.length > 0 && <FaArrowRight className="mx-3" />}
              </li>

              {/* Dynamic Breadcrumb Items */}
              {breadcrumbs.map((item, index) => (
                <li key={item.path} className="flex items-center">
                  {index !== breadcrumbs.length - 1 ? (
                    <Link to={item.path} className="text-base font-medium hover:text-opacity-80">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-base font-medium text-opacity-80">{item.label}</span>
                  )}
                  {index !== breadcrumbs.length - 1 && <FaArrowRight className="mx-3" />}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
