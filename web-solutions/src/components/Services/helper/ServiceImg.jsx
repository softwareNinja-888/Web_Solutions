export function ServiceImg({ 
  img = "/api/placeholder/400/320", 
  percentage = "53%", 
  statText = "High Conversions Everything"
}) {
   return (
    <div className="relative w-full max-w-lg mx-auto  h-110">
      {/* Improved decorative squiggly line */}
      <div className="absolute -top-6 -left-30 w-96 h-32 z-50 -rotate-20">
        <svg viewBox="0 0 300 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M10,50 Q30,20 50,40 T90,30 Q120,10 150,40 T190,30,Q220,10 250,40 T290,30" 
            fill="none" 
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      
      {/* Main image */}
      <div className="relative w-10/12 h-full  rounded-lg">
        <img 
          src={img} 
          alt="Business celebration" 
          className="w-full h-full object-cover"
        />
        
        {/* Yellow statistics box */}
        <div className="absolute -bottom-6  -left-16 bg-yellow-300 p-6 w-48">
          <div className="text-3xl font-bold">{percentage}</div>
          <div className="text-base font-medium mt-1">{statText}</div>
        </div>
      </div>
    </div>
  );
};

