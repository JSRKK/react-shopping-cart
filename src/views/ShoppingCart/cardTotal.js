import React from 'react';
import { Card, CardContent, Button } from '@material-ui/core';
import { formatPrice } from '../../utils/formatPrice';
import { BootstrapButton } from '../../components';

const CardTotal = ({ data, onCheckOut }) => {
    return (
        <React.Fragment>
            <Card style={{width: '100%'}}>
                <CardContent>
                    <div>
                        <h2>สรุป</h2>
                        {/* <p>ยอดรวมย่อย</p> */}
                        {/* <p>ค่าธรรมเนียมการจัดส่งและดำเนินการโดยประมาณ</p> */}
                        <p>จำนวนรวม: {data.productQuantity}</p>
                        <p>ยอดรวม: {formatPrice(data.totalPrice, 'THB')}</p>
                    </div>
                    <div>
                        <BootstrapButton
                            style={{ width: '100%' }}
                            onClick={onCheckOut}
                        >
                            เช็คเอาท์
                        </BootstrapButton>
                    </div>
                </CardContent>
            </Card>
        </React.Fragment>
    );
}

export default CardTotal;