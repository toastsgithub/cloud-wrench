import { Nav } from '@douyinfe/semi-ui';
import { IconTreeSelect, IconBadge, IconToken, IconJsonViewer } from '@douyinfe/semi-icons-lab';
import { useNavigate } from 'react-router';


export function Navigation() {

  const navigate = useNavigate();
  const handleSelect = (key: string) => {
    navigate(key);
  }
  return (
    <div>
      <Nav
        mode={'horizontal'}
        items={[
          {
            itemKey: 'time-converter', text: 'Time Converter', icon: <IconBadge />,
          },
          { itemKey: 'extractors', text: 'Extractors', icon: <IconTreeSelect /> },
          { itemKey: 'url-parser', text: 'Url Parser', icon: <IconJsonViewer /> },
        ]}
        onSelect={key => handleSelect(key.itemKey.toString())}
        header={{
          logo: <IconToken style={{ height: '24px', fontSize: 24 }} />,
          text: 'Cloud Wrench'
        }}
        footer={
          <span>Made with ♡ by Zane</span>
        }
      />
    </div>
  );
}
