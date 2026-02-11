
// Los valores que se pasan en los props sobrescriben los originales del svg
// Se incluye al final. 

const Chevron = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="50"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // ⭐ IMPORTANTE: esto pasa todos los props al SVG para sobreescribirlo. 
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48812C8.16101 5.17362 8.19743 4.70011 8.51192 4.43061C8.82642 4.16101 9.29989 4.19742 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695Z"
        fill="white"
      />
    </svg>
  );
};

export default Chevron;
