import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import links from "../data/links.json";

export default function HomePageList() {
  

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6">Site Navigation</h2>
      <ul className="space-y-4">
        {links.links.map((link, index) => (
          <li
            key={index}
            className="shadow hover:shadow-md transition-shadow duration-200 group"
          >
            <Link
              to={link.url}
              className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4 p-4 bg-white rounded-lg "
            >
              <div className="flex items-center justify-between md:justify-start">
                <span className="text-lg font-medium text-gray-700 group-hover:text-blue-500 transition-colors duration-200">
                  {link.title}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 md:ml-2" />
              </div>
              <p className="text-sm text-gray-600 mt-1 md:mt-0">
                {link.description}
              </p>
            </Link>
            <div className="p-4 flex gap-4">
              {link.urlVideo ? (
                <a
                  href={link.urlVideo}
                  className="text-sm text-blue-500 bg-red"
                >
                  Watch Video
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
