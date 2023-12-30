import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
    const location = useLocation();
    const paths = location.pathname.split('/').filter(path => path);

    if (paths.length === 0) {
        return null;
    }

    const breadcrumb = paths.map((path, index) => {
        const url = `/${paths.slice(0, index + 1).join('/')}`;
        const title = path.charAt(0).toUpperCase() + path.slice(1);

        const titleConverted = (title: string) => {
            switch (title) {
            case 'User':
                return 'Users';
            case 'Establishment':
                return 'Establishments';
            default:
                return title.replace(/-/g, ' ');
            }
        };

        const getTitleConverted = () => {
            return titleConverted(title);
        };

        const convertedURL = getTitleConverted().toLowerCase();

        const isLast = index === paths.length - 1;
        const color = isLast ? 'text-black' : 'text-gray-900';
        const weight = isLast ? 'font-semibold' : 'font-regular';

        if (location.pathname === '/dashboard') {
            return null;
        }

        return (
            <li key={url} className="flex items-center justify-center w-fit">
                <i className={color}>/</i>
                <Link to={`/${convertedURL}`} className="text-decoration-none pl-1">
                    {' '}
                    <p
                        className={`${color} ${weight} text-sm hover:bg-beauty-purple-light/30 duration-300 px-2 rounded-sm`}
                    >
                        {title}
                    </p>
                </Link>
            </li>
        );
    });

    return (
        <>
            <ol className="flex flex-row items-center justify-center rounded-sm list-none ">
                <li className="breadcrumb-item hover:bg-beauty-purple-light/30 transition-colors duration-300 px-2 rounded-sm">
                    <Link
                        to="/dashboard"
                        className={`text-decoration-none ${
                            location.pathname === '/dashboard'
                                ? 'text-black font-semibold'
                                : 'text-black font-regular'
                        } text-sm`}
                    >
            Dashboard
                    </Link>
                </li>
                {breadcrumb}
            </ol>
        </>
    );
}

export { Breadcrumbs };
