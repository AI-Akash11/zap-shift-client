import { useForm, useWatch } from "react-hook-form";
import { FaRegCircle, FaDotCircle } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();
  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();

  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    console.log(cost);

    Swal.fire({
      title: "Please Confirm the Cost",
      text: `You will be charrged ${cost} BDT`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/parcels', data)
        .then(res=>{
          console.log(res.data)
        })
        .catch(error=>{
          console.log(error)
        })


        // Swal.fire({
        //   title: "Confirmed!",
        //   text: "Your parcel Request has been received",
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div className="max-w-5xl mx-6 lg:mx-auto bg-white p-10 rounded-xl shadow-sm my-10">
      {/* Title */}
      <h1 className="text-4xl font-bold text-secondary mb-2">Send A Parcel</h1>
      <p className="text-lg mb-6">Enter your parcel details</p>

      {/* FORM START */}
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="space-y-10 text-black"
      >
        {/* Document Selector */}
        <div className="flex items-center gap-5">
          <label className="label">
            <input
              {...register("parcelType")}
              type="radio"
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              {...register("parcelType")}
              type="radio"
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset>
            <label className="label">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              className="input input-bordered w-full"
              {...register("parcelName")}
            />
          </fieldset>
          <fieldset>
            <label className="label">Parcel Weight</label>
            <input
              type="number"
              placeholder="Parcel Weight (KG)"
              className="input input-bordered w-full"
              {...register("parcelWeight")}
            />
          </fieldset>
        </div>

        {/* Sender + Receiver Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender */}
          <div>
            <h2 className="font-bold text-xl mb-3">Sender Details</h2>

            {/* sender name */}
            <div className="flex flex-col">
              <label className="label mb-px">Sender Name</label>
              <input
                type="text"
                placeholder="Sender Name"
                defaultValue={user?.displayName}
                className="input input-bordered w-full"
                {...register("senderName")}
              />

              {/* sender email */}
              <label className="label mt-4 mb-px">Sender Email</label>
              <input
                type="text"
                placeholder="Sender Email"
                defaultValue={user?.email}
                className="input input-bordered w-full"
                {...register("senderEmail")}
              />

              {/* sender region */}
              <label className="label mt-3 mb-px">Sender Region</label>
              <select
                className="select select-bordered w-full"
                {...register("senderRegion")}
              >
                <option disabled selected>
                  Select your Region
                </option>
                {regions.map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>

              {/* sender district */}
              <label className="label mt-3 mb-px">Sender District</label>
              <select
                className="select select-bordered w-full"
                {...register("senderDistrict")}
              >
                <option disabled selected>
                  Select your District
                </option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>

              {/* sender address */}
              <label className="label mt-3 mb-px">Sender Address</label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full"
                {...register("senderAddress")}
              />

              {/* sender phone */}
              <label className="label mt-3 mb-px">Sender Phone</label>
              <input
                type="text"
                placeholder="Sender Phone No"
                className="input input-bordered w-full"
                {...register("senderPhone")}
              />

              {/* sender instruction */}
              <label className="label mt-4 mb-px">Pickup Instruction</label>
              <textarea
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full"
                {...register("pickupInstruction")}
              ></textarea>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="font-bold text-xl mb-3">Receiver Details</h2>

            {/* Receiver name */}
            <label className="label mb-px">Receiver Name</label>
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Receiver Name"
                className="input input-bordered w-full"
                {...register("receiverName")}
              />

              {/* receiver email */}
              <label className="label mt-4 mb-px">Receiver Email</label>
              <input
                type="text"
                placeholder="Receiver Email"
                className="input input-bordered w-full"
                {...register("receiverEmail")}
              />

              {/* receiver region */}
              <label className="label mt-3 mb-px">Receiver Region</label>
              <select
                className="select select-bordered w-full"
                {...register("receiverRegion")}
              >
                <option disabled selected>
                  Select Receiver Region
                </option>
                {regions.map((r, i) => (
                  <option value={r} key={i}>
                    {r}
                  </option>
                ))}
              </select>

              {/* receiver district */}
              <label className="label mt-3 mb-px">Receiver District</label>
              <select
                className="select select-bordered w-full"
                {...register("receiverDistrict")}
              >
                <option disabled selected>
                  Select Receiver District
                </option>
                {districtsByRegion(receiverRegion).map((d, i) => (
                  <option key={i}>{d}</option>
                ))}
              </select>

              {/* Receiver address */}
              <label className="label mt-3 mb-px">Receiver Address</label>
              <input
                type="text"
                placeholder="Address"
                className="input input-bordered w-full"
                {...register("receiverAddress")}
              />

              {/* Receiver phone */}
              <label className="label mt-3 mb-px">Receiver Phone</label>
              <input
                type="text"
                placeholder="Receiver Phone No"
                className="input input-bordered w-full"
                {...register("receiverPhone")}
              />

              {/* Receiver instruction */}
              <label className="label mt-4 mb-px">Delivery Instruction</label>
              <textarea
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full"
                {...register("deliveryInstruction")}
              ></textarea>
            </div>
          </div>
        </div>

        {/* Pickup Time */}
        <p className="text-sm mt-2">* Pickup Time 4pm-7pm Approx.</p>

        {/* Submit Button */}
        <input
          type="submit"
          className="btn bg-primary hover:bg-blue-300 text-black font-bold px-10"
          value="Proceed to Confirm Booking"
        />
      </form>
      {/* FORM END */}
    </div>
  );
};

export default SendParcel;
