import { SubmitHandler, useForm } from "react-hook-form";

type InputProps = {
  car_number: string;
  driver_name: string;
  assist_name: string;
  route_from: string;
  route_to: string;
  fuel_fill_date: Date;
  fuel_check_date: Date;
  fuel_filled: number;
  distance: number;
  fuel_consumed: number;
  remaining_fuel: number;
};

export default function CreateRecordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>();
  const onSubmit: SubmitHandler<InputProps> = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form className="flex justify-around" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-10">
          <div className="flex flex-col">
            <label htmlFor="Car Number" className="text-md mb-1">
              Car Number
            </label>
            <select {...register("car_number")} className="rounded-lg px-2 p-1">
              <option value="1A-1100">1A-1100</option>
              <option value="2B-3802">2B-3802</option>
              <option value="3C-9420">3C-9420</option>
            </select>
          </div>
          {/* Personal Info */}
          <div>
            <p className="font-bold text-2xl mb-5">Personal Info</p>
            <div className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="Driver Name" className="text-md mb-1">
                  Driver Name
                </label>
                <input
                  {...register("driver_name", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="rounded-lg px-2 p-1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Assist Name" className="text-md mb-1">
                  Assist Name
                </label>
                <input
                  {...register("assist_name", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="rounded-lg px-2 p-1"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="font-bold text-2xl mb-5">Route</p>
            <div className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="Driver Name" className="text-md mb-1">
                  Route From
                </label>
                <input
                  {...register("route_from", { required: true, maxLength: 20 })}
                  className="rounded-lg px-2 p-1"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold text-2xl mb-5 mt-5">Fuel Info</p>
            <div className="space-y-5">
              <div className="flex flex-col">
                <label htmlFor="Filled Date" className="text-md mb-1">
                  Filled Date
                </label>
                <input
                  type="date"
                  {...register("fuel_fill_date", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="rounded-lg px-2 p-1"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="Fuel Filled" className="text-md mb-1">
                  Fuel Filled
                </label>
                <input
                  type="number"
                  {...register("fuel_filled", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="rounded-lg px-2 p-1"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Fuel Consumed" className="text-md mb-1">
                  Fuel Consumed
                </label>
                <input
                  type="number"
                  {...register("fuel_consumed", {
                    required: true,
                    maxLength: 20,
                  })}
                  className="rounded-lg px-2 p-1"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-5 mt-12">
          <div className="flex flex-col mt-1">
            <label htmlFor="Assist Name" className="text-md mb-1">
              Route To
            </label>
            <input
              {...register("route_to", { required: true, maxLength: 20 })}
              className="rounded-lg px-2 p-1"
            />
          </div>
          <div className="mt-10">
            <div className="flex flex-col">
              <label htmlFor="Check Date" className="text-md mb-1">
                Check Date
              </label>
              <input
                type="date"
                {...register("route_to", { required: true, maxLength: 20 })}
                className="rounded-lg px-2 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Distance" className="text-md mb-1">
                Distance{" "}
              </label>
              <input
                type="number"
                {...register("distance", { required: true, maxLength: 20 })}
                className="rounded-lg px-2 p-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Remaining Fuel" className="text-md mb-1">
                Remaining Fuel{" "}
              </label>
              <input
                type="number"
                {...register("remaining_fuel", {
                  required: true,
                  maxLength: 20,
                })}
                className="rounded-lg px-2 p-1"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-primary-dark rounded-lg mt-12"
            >
              Create
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
