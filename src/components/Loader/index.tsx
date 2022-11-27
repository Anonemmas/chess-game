export default function Loader() {
  return (
    <div className="loader fixed inset-0 z-[200] overflow-hidden">
      <div className="relative h-[.2rem] bg-white">
        <span className="animation absolute left-0 top-0 z-[101] inline-block h-full w-2/5 rounded-md bg-primary-blue shadow-md lg:w-1/4"></span>
      </div>
      <div className="overlay inset-0 h-full  bg-black opacity-[0.2]"></div>
    </div>
  );
}
