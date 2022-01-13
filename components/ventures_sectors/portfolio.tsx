import { FormattedMessage } from "react-intl";

export default function Portfolio() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-2xl text-base font-semibold uppercase text-gray-600 tracking-wider">
          <FormattedMessage
            defaultMessage="投资组合"
            id="components.ventures_sectors.portfolio.0"
          />
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 w-36"
              src="/img/ventures_defi_pulse.png"
              alt="DeFi Pulse"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 w-36"
              src="/img/ventures_terra.png"
              alt="Terra"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 w-42"
              src="/img/ventures_set.png"
              alt="Set"
            />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img
              className="max-h-12 w-36"
              src="/img/ventures_instaapp.png"
              alt="Instaapp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
