import { Banner, Card, Descriptions, Divider, Form, Input } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import moment from 'moment-timezone'


export function TimeConverterPage() {
  const [input, setInput] = useState(new Date().toISOString())
  const [syncNow, setSyncNow] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormValuesChange = (vals: any) => {
    setSyncNow(vals.syncNow)
  }

  const result = moment(input).isValid() ? moment(input).format("YYYY-MM-DD HH:mm:ss") : "输入无效"

  useEffect(() => {
    let handler: NodeJS.Timeout
    if (syncNow) {
      setInput(new Date().toISOString())
      handler = setInterval(() => {
        setInput(new Date().toISOString())
      }, 1000);
    }
    return () => {
      clearInterval(handler)
    }
  }, [syncNow])

  return (
    <div className="flex justify-center">
      <Card className="w-5xl" title="TimeConverter">
        <Banner className="mb-[20px]" fullMode={false} type="info" bordered icon={null} closeIcon={null}
          title={<div style={{ fontWeight: 900, fontSize: '14px', lineHeight: '20px' }}>Usage: </div>}
          description={<div className="mt-[10px]">Enter any timestamp or time string, and will be converted to various of different forms; When the switch「Sync Now」is enabled, you'll not be able to enter time, and the time will sync with current time. </div>}
        />
        <Input disabled={syncNow} placeholder={"Enter timestamp or time string"} value={input} onChange={setInput} />
        <Form labelPosition="left" initValues={{ syncNow }} onValueChange={handleFormValuesChange}>
          <Form.Switch field="syncNow" label="Sync Now" />
        </Form>
        <Divider margin={20} />
        {input && (
          <Descriptions>
            <Descriptions.Item itemKey="Beijing Time (UTC + 8)">{moment(input).tz("Asia/Shanghai").format("YYYY-MM-DD HH:mm:ss")}</Descriptions.Item>
            <Descriptions.Item itemKey="MDT Mountain Daylight Time (UTC - 6)">{moment(input).tz("America/Belize").format("YYYY-MM-DD HH:mm:ss")}</Descriptions.Item>
            <Descriptions.Item itemKey="MST Mountain Standard Time (UTC - 7)">{moment(input).tz("America/Phoenix").format("YYYY-MM-DD HH:mm:ss")}</Descriptions.Item>
          </Descriptions>
          )}
      </Card>
    </div>
  )
}