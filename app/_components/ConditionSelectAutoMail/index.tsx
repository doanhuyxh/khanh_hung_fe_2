import React, {useEffect, useRef, useState} from 'react';
import {Select, Input, Row, Col, Card} from 'antd';
import {Condition, ConditionSelected} from "@/app/_libs/types";

const {Option} = Select;
import {switch_display_label, switch_display_subLabel, switch_display_value} from "@/app/_libs/utils";


const ConditionSelector = ({data, onChange, intData}) =>{
    const conditionRef = useRef(null);
    const [selectedCondition, setSelectedCondition] = useState<ConditionSelected>({
        label: '',
        subLabel: '',
        condition: '',
        value: ''
    });

    const [condition, setCondition] = useState<string[]>([]);

    const handleSelectLabel = (label: string) => {
        const condition = data.find((item: Condition) => item.label + " " + item.conditionListLabel === label);
        if (condition.conditionType == "boolean") {
            setCondition([
                "authenticated",
                "unauthenticated"
            ]);
        } else {
            setCondition(condition.conditionKey);
        }

        setSelectedCondition({
            label: condition.label,
            subLabel: condition.conditionListLabel,
            condition: '',
            value: ''
        });

        if (condition.conditionType == "boolean") {
            setSelectedCondition({
                label: condition.label,
                subLabel: condition.conditionListLabel,
                condition: "authenticated",
                value: ''
            });
        }
    };

    useEffect(() => {
        onChange(selectedCondition);
    }, [selectedCondition]);

    useEffect(() => {
        if(intData){
            setSelectedCondition({...intData});
        }
    }, []);


    return (
        <div className="flex flex-row flex-wrap justify-between bg-white px-3 py-2 rounded w-11/12">
            <Card bordered={false} className="w-full">
                <Row gutter={[16, 16]} align="middle">
                    <Col xs={24} sm={8}>
                        <div className="min-w-[100px]" style={{height: '100%'}}>
                            <Select
                                onChange={handleSelectLabel}
                                placeholder="Select condition"
                                style={{width: '100%', height: '100%'}}
                            >
                                {data.map((item: Condition, index: number) => (
                                    <Option key={index} value={item.label + " " + item.conditionListLabel}>
                                        {switch_display_label(item.label)} <strong>{switch_display_subLabel(item.conditionListLabel)}</strong>
                                    </Option>
                                ))}
                            </Select>
                        </div>
                    </Col>

                    <Col xs={24} sm={8}>
                        <Select
                            placeholder="Select sub-condition"
                            style={{width: '100%', height: '100%'}}
                            disabled={condition.length === 0}
                            onChange={(value) => setSelectedCondition({...selectedCondition, condition: value})}
                        >
                            {condition.map((item, index) => (
                                <Option key={index} value={item}>
                                    {switch_display_value(item)}
                                </Option>
                            ))}


                        </Select>
                    </Col>

                    {selectedCondition.subLabel != 'is_verify_email' && <Col xs={24} sm={8}>
                        <Input
                            className="rounded"
                            placeholder="Nhập số"
                            style={{width: '100%', height: '100%'}}
                            onChange={(e) => setSelectedCondition({...selectedCondition, value: e.target.value})}
                        />
                    </Col>
                    }
                </Row>
            </Card>
        </div>
    );
};

export default ConditionSelector;
