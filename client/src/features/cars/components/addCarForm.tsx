
import { useForm, useFieldArray } from "react-hook-form";

type FormData = {
    items: {
        number: string;
        type: string;
        consumption: string;
        fuelType: string;
        expireDate: string;
    }[];
};

const AddCarForm = () => {
    const { control, reset,  register, handleSubmit } = useForm<FormData>({
        defaultValues: {
            items: [
                {
                    number: "",
                    type: "",
                    consumption: "",
                    fuelType: "",
                    expireDate: "",
                },
            ],
        },
    });

    const { fields } = useFieldArray({
        control,
        name: "items",
    });

    const onSubmit = (data: FormData) => {
        // add Submit function here
        console.log(data);

        reset({
            items: [
                {
                    number: "",
                    type: "",
                    consumption: "",
                    fuelType: "",
                    expireDate: "",
                }
            ]
        })
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map((field, index) => (
                <div
                    key={field.id}
                    className="flex flex-row"

                >
                    <div>
                        <label className="text-sm"> Number</label>
                        <input
                            type="text"
                            {...register(`items.${index}.number`, { required: true })}
                            className="rounded-lg pl-2  text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Type</label>
                        <input
                            type="text"
                            {...register(`items.${index}.type`, { required: true })}
                            className="rounded-lg pl-2 text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Consumption</label>
                        <input
                            type="text"
                            {...register(`items.${index}.consumption`, { required: true })}
                            className="rounded-lg pl-2 text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Fuel Type</label>
                        <input
                            type="text"
                            {...register(`items.${index}.fuelType`, { required: true })}
                            className="rounded-lg pl-2 text-sm"
                        />
                    </div>
                    <div>
                        <label className="text-sm">Expire Date</label>
                        <input
                            type="date"
                            {...register(`items.${index}.expireDate`, { required: true })}
                            className="rounded-lg pl-2 text-sm"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-40 px-4 py-2 text-white bg-primary-dark rounded-lg "
                    >
                       <p className="text-sm">Add New</p>
                    </button>
                </div>
            ))}

        </form>
    );
};

export default AddCarForm;
