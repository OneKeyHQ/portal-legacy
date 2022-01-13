import Image from "next/image";
import { FormattedMessage } from "react-intl";
export interface TeamItemProps {
  name: string;
  role: string;
  src: string;
}

const TeamItem = ({ name, role, src }: TeamItemProps) => (
  <li>
    <div className="space-y-4">
      <div className="mx-auto w-24 h-24">
        <img
          // layout="responsive"
          // width={96}
          // height={96}
          src={src}
          alt={`Avatar of ${name}`}
          className="rounded-full w-24 h-24"
        />
      </div>
      <div className="space-y-2">
        <div className="text-xs font-medium lg:text-sm">
          <h3>{name}</h3>
          <p className="text-green-700">{role}</p>
        </div>
      </div>
    </div>
  </li>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Team({ members }: { members: TeamItemProps[] }) {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              <FormattedMessage
                id="pages.teams.members.title"
                defaultMessage="我们致力于成为加密货币行业的基础设施与管道"
              />
            </h2>
            <p className="text-xl text-gray-500">Keep #Buidling</p>
          </div>
          <ul className="member-wall mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6">
            {!!members?.length &&
              members.map((member: TeamItemProps) => (
                <TeamItem key={member.src} {...member} />
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
