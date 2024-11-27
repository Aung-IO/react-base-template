import AddCarForm from "../components/addCarForm";


export default function ShowCarList() {
  return (
    <div className="flex flex-col gap-5">
      <AddCarForm/>
      <h1>Car list table here</h1>
    </div>
  )
}
