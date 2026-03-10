// Los valores que se pasan en los props sobrescriben los originales del svg
// Se incluye al final.

const Circle = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="10"
      height="10"
      x="0"
      y="0"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 23C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11z"
          fill="#000000"
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default Circle;
