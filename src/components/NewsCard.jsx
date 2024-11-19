const NewsCard = ({ title, date, author, imageUrl, content, tags }) => {
    return (
      <div className="border rounded-lg shadow-sm p-4 mb-4 max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center mb-2">
          <img
            src="https://via.placeholder.com/40" // Placeholder for author's image; replace with actual `authorImage` if available
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-sm">{author}</h3>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
          <div className="ml-auto text-gray-500 hover:text-gray-700 cursor-pointer">
            {/* Social sharing or any other icon can go here */}
            <i className="fas fa-share-alt"></i>
          </div>
        </div>
  
        {/* Content */}
        <h2 className="font-bold text-lg mb-2">{title}</h2>
        <img
          src={imageUrl} // Replace with actual `imageUrl` or static image URL
          alt="News"
          className="w-full h-48 object-cover rounded mb-2"
        />
        <p className="text-gray-700 text-sm mb-2">{content}</p>
        <a href="#" className="text-blue-500 hover:underline text-sm">
          Read More
        </a>
  
        {/* Tags and Footer */}
        <div className="mt-4">
          <p className="text-xs text-gray-500">{tags}</p>
          <div className="flex items-center justify-between mt-2">
            {/* Rating Section */}
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span className="text-sm">4.9</span>
            </div>
            <div className="flex items-center text-gray-500">
              {/* Eye icon and view count (as example) */}
              <i className="far fa-eye mr-1"></i>
              <span className="text-sm">491</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NewsCard;
  