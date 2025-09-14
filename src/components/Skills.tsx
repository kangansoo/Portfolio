const Skills = () => {
  return (
    <div className="w-full h-full flex justify-center items-center select-none">
      <div className="w-[60%] h-[80%] flex flex-col justify-center">
        <p className="font-nanumsquare text-2xl font-bold text-font-color">Skills</p>
        <div className="w-full flex flex-col font-nexon text-font-color/80">
          <p className="text-lg mt-5 mb-2">strong</p>
          <p className="text-sm">JavaScript / React.js / Next.js / Redux / React-Query / TypeScript / HTML5 / CSS / Tailwindcss / Styled Components / Java / WebSocket / WebRTC</p>
          <p className="text-lg mt-5 mb-2">experienced</p>
          <p className="text-sm">Vue.js / Spring / Python / scikit-learn / Numpy / Pandas / MySQL </p>
          <p className="text-lg mt-5 mb-2">etc</p>
          <p className="text-sm">Figma / Git / Jira</p>
        </div>
      </div>
    </div>
  )
}

export default Skills
