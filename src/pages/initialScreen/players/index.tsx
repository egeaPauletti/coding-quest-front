export default function ForPlayers() {
  return (
    <section className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <div className="w-full h-max flex flex-col items-center gap-5">
        <h2 className="w-full text-primary text-3xl font-semibold text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        <p className="w-full text-white text-sm max-w-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus doloremque ducimus repudiandae beatae neque, ratione, harum quidem placeat modi cupiditate ipsa voluptates vitae consequatur id? Pariatur corrupti recusandae maxime dolor.</p>
      </div>
      <div className="w-screen h-max flex flex-col gap-10 justify-center items-center">
        <div className="w-[60%] h-max flex gap-10">
          <div className="w-full h-60 glasseffect border border-primary/10 flex flex-col flex-1 justify-start gap-5 p-10">
            <h3 className="w-full flex justify-center text-primary text-xl font-semibold">Quem está querendo começar a Estudar!</h3>
            <p className="w-full text-justify text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo optio repellendus, quaerat nulla at nam, fugit necessitatibus tempore iusto harum cumque qui placeat molestias distinctio. Consectetur, repudiandae! Vitae, itaque.</p>
          </div>
          <div className="w-full h-60 glasseffect border border-primary/10 flex flex-col flex-1/12 justify-start gap-5 p-10">
            <h3 className="w-full flex justify-center text-primary text-xl font-semibold">Quem está estudando programação!</h3>
            <p className="w-full text-justify text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo optio repellendus, quaerat nulla at nam, fugit necessitatibus tempore iusto harum cumque qui placeat molestias distinctio. Consectetur, repudiandae! Vitae, itaque.</p>
          </div>
        </div>
        <div className="w-[60%] h-max flex gap-10">
          <div className="w-full h-60 glasseffect border border-primary/10 flex flex-col flex-1 justify-start gap-5 p-10">
            <h3 className="w-full flex justify-start text-primary text-xl font-semibold">Quem já sabe programar!</h3>
            <p className="w-1/2 text-justify text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo optio repellendus, quaerat nulla at nam, fugit necessitatibus tempore iusto harum cumque qui placeat molestias distinctio. Consectetur, repudiandae! Vitae, itaque.</p>
          </div>
        </div>
      </div>
    </section>
  )
}