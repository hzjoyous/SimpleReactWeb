import React, { Component } from 'react'
import { Button, Spin, Pagination, Badge } from 'antd'
export default class index extends Component {
    render() {
        return (
            <div>
                <Button loading type="primary"> 测试按钮 </Button>
                <Spin>
                    <div>dasdsadasdlalfakjflajdsflkajdlfjkdlfjlasdjflakdjfal</div>
                </Spin>
                <Pagination
                    showQuickJumper
                    showSizeChanger
                    defaultCurrent={2}
                    total={500}
                >
                </Pagination>
                <Badge
                    count={1}
                    overflowCount={10}
                    showZero
                >
                    <div>lakfjladjfkajsdlfjaldfjlkadsjflajdsklf</div>
                </Badge>
            </div>
        )
    }
}
