import { Breadcrumbs } from "@material-tailwind/react";
import { routes } from "../utils/routes";
import { Link, useLocation } from 'react-router-dom';


export function Breadcumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs>
      <a href="/" className="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </a>
      
      {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const routeName = routes.find(route => route.link == to)?.label;
          console.log(routeName);
          
          return (
            <a href=''  key={index}>
              {last ? (
                <span className="mx-0.5 ">{routeName}</span>
              ) : (
                <Link to={to} className="mx-0.5 opacity-60">{routeName}</Link>
              )}
            </a>
          );
        })}
      

    </Breadcrumbs>
  );
}