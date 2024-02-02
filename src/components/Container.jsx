export default function Container({children}) {
  return (
    <div className="lg:container lg:mx-auto px-3 2xl:px-36">
      {children}  
    </div>
  );
};
