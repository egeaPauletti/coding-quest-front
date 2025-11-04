import panelCampaign from "../../../assets/panels/panelCampaign.jpg"
import "./index.css"
export default function Plataform() {
  return (
    <section className="w-screen h-max flex flex-col justify-center items-center gap-20 my-20">
      <div className="w-full h-full flex flex-col gap-20 justify-around items-center px-20">
        <div className="w-full flex flex-col gap-10 items-start justify-center text-center">
          <h2 className="w-full text-primary text-3xl font-semibold">Nossas Plataforma</h2>
          <p className="w-full text-white text-sm">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  remaining essentially unchanged. It was popularised in the 1960s with  the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker  including versions of Lorem Ipsum.</p>
        </div>
        <div className="flex w-full justify-center gap-20">
          <div className="flex flex-col text-center w-100 gap-5">
            <h2 className="text-primary text-xl font-semibold">{"{Desafios Diários}"}</h2>
            <p className="text-white text-justify text-sm">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries,</p>
          </div>
          <div className="flex flex-col text-center w-100 gap-5">
            <h2 className="text-primary text-xl font-semibold">{"{Modo Campanha}"}</h2>
            <p className="text-white text-justify text-sm">Lorem Ipsum is simply dummy text of the printing and  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of  type and scrambled it to make a type specimen book. It has survived not  only five centuries,</p>
          </div>
        </div>
      </div>
      <figure className="w-4/6 h-max shadowPanelCampaign">
        <img src={panelCampaign} alt="" />
      </figure>
    </section>
  )
}