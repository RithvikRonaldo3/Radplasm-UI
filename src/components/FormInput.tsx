import { useState, InputHTMLAttributes, ReactNode } from 'react';
import { FieldErrors, Control } from 'react-hook-form';

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  refCallback?: any;
  errors: FieldErrors;
  control?: Control<any>;
  register?: any;
  className?: string;
}

const usStates = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  { name: "Colorado", abbreviation: "CO" },
  { name: "Connecticut", abbreviation: "CT" },
  { name: "Delaware", abbreviation: "DE" },
  { name: "Florida", abbreviation: "FL" },
  { name: "Georgia", abbreviation: "GA" },
  { name: "Hawaii", abbreviation: "HI" },
  { name: "Idaho", abbreviation: "ID" },
  { name: "Illinois", abbreviation: "IL" },
  { name: "Indiana", abbreviation: "IN" },
  { name: "Iowa", abbreviation: "IA" },
  { name: "Kansas", abbreviation: "KS" },
  { name: "Kentucky", abbreviation: "KY" },
  { name: "Louisiana", abbreviation: "LA" },
  { name: "Maine", abbreviation: "ME" },
  { name: "Maryland", abbreviation: "MD" },
  { name: "Massachusetts", abbreviation: "MA" },
  { name: "Michigan", abbreviation: "MI" },
  { name: "Minnesota", abbreviation: "MN" },
  { name: "Mississippi", abbreviation: "MS" },
  { name: "Missouri", abbreviation: "MO" },
  { name: "Montana", abbreviation: "MT" },
  { name: "Nebraska", abbreviation: "NE" },
  { name: "Nevada", abbreviation: "NV" },
  { name: "New Hampshire", abbreviation: "NH" },
  { name: "New Jersey", abbreviation: "NJ" },
  { name: "New Mexico", abbreviation: "NM" },
  { name: "New York", abbreviation: "NY" },
  { name: "North Carolina", abbreviation: "NC" },
  { name: "North Dakota", abbreviation: "ND" },
  { name: "Ohio", abbreviation: "OH" },
  { name: "Oklahoma", abbreviation: "OK" },
  { name: "Oregon", abbreviation: "OR" },
  { name: "Pennsylvania", abbreviation: "PA" },
  { name: "Rhode Island", abbreviation: "RI" },
  { name: "South Carolina", abbreviation: "SC" },
  { name: "South Dakota", abbreviation: "SD" },
  { name: "Tennessee", abbreviation: "TN" },
  { name: "Texas", abbreviation: "TX" },
  { name: "Utah", abbreviation: "UT" },
  { name: "Vermont", abbreviation: "VT" },
  { name: "Virginia", abbreviation: "VA" },
  { name: "Washington", abbreviation: "WA" },
  { name: "West Virginia", abbreviation: "WV" },
  { name: "Wisconsin", abbreviation: "WI" },
  { name: "Wyoming", abbreviation: "WY" }
];

/* Password Input */
const PasswordInput = ({ name, placeholder, refCallback, errors, register, className }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex items-center">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={`${className} ${errors && errors[name] ? 'border-red-500 text-red-700 -me-px' : ''}`}
        {...(register ? register(name) : {})}
        autoComplete={name}
      />
      <span
        className="px-3 py-1 border rounded-e-md -ms-px dark:border-white/10"
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        <i className={`${showPassword ? 'ri-eye-close-line' : 'ri-eye-line'} text-lg`}></i>
      </span>
    </div>
  );
};

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  name: string;
  placeholder?: string;
  register?: any;
  errors?: any;
  control?: Control<any>;
  className?: string;
  labelContainerClassName?: string;
  labelClassName?: string;
  containerClass?: string;
  refCallback?: any;
  children?: ReactNode;
  rows?: number;
}

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  register,
  errors,
  className,
  labelClassName,
  labelContainerClassName,
  containerClass,
  refCallback,
  children,
  rows,
  ...otherProps
}: FormInputProps) => {
  const Tag = type === 'textarea' ? 'textarea' : type === 'select' ? 'select' : 'input';

  return (
    <>
      {type === 'hidden' ? (
        <input type={type} name={name} {...(register ? register(name) : {})} {...otherProps} />
      ) : (
        <>
          {type === 'password' ? (
            <div className={containerClass ?? ''}>
              {label && (
                <div className={labelContainerClassName ?? ''}>
                  <label className={labelClassName ?? ''} htmlFor={name}>
                    {label}
                  </label>
                  {children}
                </div>
              )}
              <PasswordInput
                name={name}
                placeholder={placeholder}
                refCallback={refCallback}
                errors={errors}
                register={register}
                className={className}
              />
              {errors && errors[name] && (
                <>
                  <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                    <i className="mgc_warning_fill text-xl text-red-500" />
                  </div>
                  <p className="text-xs text-red-600 mt-2">{errors[name]['message']}</p>
                </>
              )}
            </div>
          ) : (
            <>
              {type === 'textarea' ? (
                <div className={`${containerClass ?? ''} relative`}>
                  {label ? (
                    <label className={labelClassName ?? ''} htmlFor={name}>
                      {label}
                    </label>
                  ) : null}
                  <Tag
                    placeholder={placeholder}
                    name={name}
                    id={name}
                    rows={rows}
                    ref={(r: HTMLInputElement) => {
                      if (refCallback) refCallback(r);
                    }}
                    className={`${className} w-full ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700 pe-10' : ''}`}
                    {...(register ? register(name) : {})}
                    {...otherProps}
                    autoComplete={name}
                  />
                </div>
              ) : (
                <>
                  {type === 'select' ? (
                    <div className={`${containerClass ?? ''} relative`}>
                      {label && (
                        <label className={labelClassName ?? ''} htmlFor={name}>
                          {label}
                        </label>
                      )}
                      <Tag
                        name={name}
                        id={name}
                        ref={(r: HTMLSelectElement) => {
                          if (refCallback) refCallback(r);
                        }}
                        className={className}
                        {...(register ? register(name) : {})}
                        {...otherProps}
                        autoComplete={name}
                      >
                        <option disabled value="">
                          Choose...
                        </option>
                        {usStates.map((state) => (
                          <option key={state.abbreviation} value={state.abbreviation}>
                            {state.name}
                          </option>
                        ))}
                      </Tag>
                    </div>
                  ) : (
                    <>
                      {type === 'checkbox' || type === 'radio' ? (
                        <div className={containerClass ?? ''}>
                          <div className="flex items-center">
                            <input
                              type={type}
                              name={name}
                              id={name}
                              ref={(r: HTMLInputElement) => {
                                if (refCallback) refCallback(r);
                              }}
                              className={`${className} ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700 pe-10' : ''}`}
                              {...(register ? register(name) : {})}
                              {...otherProps}
                            />
                            <label className={labelClassName ?? ''} htmlFor={name}>
                              {label}
                            </label>
                          </div>
                        </div>
                      ) : (
                        <div className={containerClass ?? ''}>
                          {label && (
                            <label className={labelClassName ?? ''} htmlFor={name}>
                              {label}
                            </label>
                          )}
                          <div className="relative">
                            <input
                              type={type}
                              placeholder={placeholder}
                              name={name}
                              id={name}
                              ref={(r: HTMLInputElement) => {
                                if (refCallback) refCallback(r);
                              }}
                              className={`${className} ${errors && errors[name] ? 'border-red-500 focus:border-red-500 text-red-700 pe-10' : ''}`}
                              {...(register ? register(name) : {})}
                              {...otherProps}
                              autoComplete={name}
                            />
                            {errors && errors[name] && (
                              <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                <i className="ri-error-warning-fill text-xl text-red-500" />
                              </div>
                            )}
                          </div>
                          {errors && errors[name] && <p className="text-xs text-red-600 mt-2">{errors[name]['message']}</p>}
                          {children ? children : null}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
};

export default FormInput;
