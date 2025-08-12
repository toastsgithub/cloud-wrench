import { Banner, Card, Descriptions, Divider, Input, Tag, Typography } from "@douyinfe/semi-ui";
import type { Data } from "@douyinfe/semi-ui/lib/es/descriptions";
import { useState } from "react";


export function URLParserPage() {
  const [input, setInput] = useState("")
  let hasError = false
  const data: Data[] = []
  try {
    const url = new URL(input)
    data.push({ key: '协议', value: <Tag style={{ margin: 0 }}>{url.protocol.replace(':', '')}</Tag> })
    data.push({ key: '域名', value: url.hostname })
    data.push({ key: '路径', value: url.pathname })
    let queryCount = 1
    for (const [key, value] of url.searchParams) {
      data.push({ key: `Query-${queryCount}`, value: `${key}=${value}` })
      queryCount++
    }
    hasError = false
  } catch (e) {
    console.log('err', e)
    hasError = true
  }

  const emptyTips = <Typography.Text type="quaternary" >After enter URL, parse result will be here.</Typography.Text>
  const errorTips = <Typography.Text type="danger" >The URL is malformed, please check again.</Typography.Text>

  return (
    <div className="flex justify-center">
      <Card className="w-5xl">
        <Banner className="mb-[20px]" fullMode={false} type="info" bordered icon={null} closeIcon={null}
          title={<div style={{ fontWeight: 900, fontSize: '14px', lineHeight: '20px' }}>Usage: </div>}
          description={<div className="mt-[10px]">After entering a URL, parser will intuitively parse information such as the URL's protocol, domain name, path, query parameters, etc., for easy reference</div>}
        />
        <Input placeholder="Enter URL here" value={input} onChange={setInput} />
        <Divider margin={20} />
        {input
          ? hasError
            ? errorTips
            : <Descriptions data={data} />
          : emptyTips}
      </Card>
    </div>
  )
}