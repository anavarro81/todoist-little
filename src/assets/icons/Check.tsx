// Los valores que se pasan en los props sobrescriben los originales del svg
// Se incluye al final.

const Check = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="#000000"
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      id="check"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      class="icon flat-color"
      {...props}
    >
      <path
        id="primary"
        d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z"
        // style="fill: rgb(0, 0, 0);"
      ></path>
    </svg>
  );
};

export default Check;
