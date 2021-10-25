// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';

type BreadcrumbObject = {
    active: boolean,
    label: string,
    path: string
};

type PageTitleProps = {
    breadCrumbItems: BreadcrumbObject[],
    title: string,
};

/**
 * PageTitle
 */
const PageTitle = (props: PageTitleProps) => {
    return (
        <Row>
            <Col>
                <div className="page-title-box">
                    <div className="page-title-right">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/">Home</Link>
                            </BreadcrumbItem>
                            {props.breadCrumbItems.map((item, index) => {
                                return item.active ? (
                                    <BreadcrumbItem active key={index}>
                                        {item.label}
                                    </BreadcrumbItem>
                                ) : (
                                    <BreadcrumbItem key={index}>
                                        <Link to={item.path}>{item.label}</Link>
                                    </BreadcrumbItem>
                                );
                            })}
                        </Breadcrumb>
                    </div>
                    <h4 className="page-title">{props.title}</h4>
                </div>
            </Col>
        </Row>
    );
};

export default PageTitle;
