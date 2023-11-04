import { ElementType } from 'react';
import { Home } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="sticky top-0 overflow-y-auto scrollball-hidden pb-4 flex flex-col ml-1 lg:hidden">
      <SmallSidebarItem Icon={Home} title="Home" url="/" />
    </aside>
  );
};

export default Sidebar;

type SmallSidebarItemProps = {
  Icon: ElementType;
  title: string;
  url: string;
};

const SmallSidebarItem = ({ Icon, title, url }: SmallSidebarItemProps) => {
  return (
    <a href={url} className="">
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
};
