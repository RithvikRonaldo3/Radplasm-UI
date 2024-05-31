import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import CustomFlatpickr from '@/components/CustomFlatpickr';
import { FileUploader, FormInput, PageBreadcrumb } from '../../../components';

type FormData = {
	MRN: string;
	OrderingDoctor: string;
	Hospital: string;
	Address: string;
	Priority: string;
	DoctorPhone: string;
	DOB: string;
	Message: string;
  };

const Validation: React.FC = () => {
	const { handleSubmit, control, register, formState: { errors } } = useForm<FormData>();
	const [submittedData, setSubmittedData] = useState<FormData[]>([]);


	const onSubmit = (data: FormData) => {
		setSubmittedData(prevData => [...prevData, data]);
		console.log(data);
	  };

  return (
    <>
      <PageBreadcrumb title="Create Patient" subName="Patient" />
      <div className="card">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h4 className="card-title mb-1">Patient Information</h4>
          </div>

          <div className="pt-5">
            <form className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)}>
              <FormInput
                name="MRN"
                type="text"
                label="MRN"
                labelClassName="mb-2"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
              <FormInput
                name="OrderingDoctor"
                type="text"
                label="Ordering Doctor"
                labelClassName="mb-2"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
              <FormInput
                name="Hospital"
                type="text"
                label="Hospital"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
			  </form>
			   <form className="grid lg:grid-cols-2 sm:grid-cols-2 gap-6 pt-5" onSubmit={handleSubmit(onSubmit)}>
			   <FormInput
                name="Address"
                type="text"
                label="Address"
                labelClassName="mb-2"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
			   <FormInput
                name="Priority"
                type="text"
                label="Priority"
                labelClassName="mb-2"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
			   <FormInput
                name="DoctorPhone"
                type="text"
                label="Doctor Phone no:"
                labelClassName="mb-2"
                className="form-input"
                register={register}
                errors={errors}
                required
              />
			  <div className="mb-3">
							<label className="mb-2">Date of Birth</label>
							<CustomFlatpickr
								className="form-input"
								onChange={() => {}}
								value={new Date()}
								options={{
									altInput: true,
									altFormat: 'F j, Y',
									dateFormat: 'Y-m-d',
								}}
							/>
						</div>
			   </form>
			   <form className="grid lg:grid-cols-1 sm:grid-cols-1 gap-6 pt-5" onSubmit={handleSubmit(onSubmit)}>
			   <FormInput name="Message" label="Message" type="textarea" containerClass="w-full space-y-1.5 mb-6" className="form-input" rows={3} key="description" register={register} errors={errors} control={control} />
				</form>
				<div className="flex mt-4 col-span-2 mr-3">
                <button type="button" className="btn bg-blue-500 border-blue-500 text-white py-3 px-10 mr-4">
                  Save
                </button>
                <button type="submit" className="btn  bg-red-500 border-red-500 text-white py-3 px-10">
                  Cancel
                </button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Validation;