import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from '@material-tailwind/react';
import Chart from 'react-apexcharts';

export function StatisticsChart({
    color,
    chart,
    title,
    description,
    footer,
}: any) {
    return (
        <Card className="w-full items-center border">
            <CardHeader variant="gradient" color={color} className="w-96">
                <Chart {...chart} />
            </CardHeader>
            <div className="w-96">
                <CardBody className="p-6">
                    <Typography variant="h6" color="blue-gray">
                        {title}
                    </Typography>
                    <Typography
                        variant="small"
                        className="font-normal text-blue-gray-600"
                    >
                        {description}
                    </Typography>
                </CardBody>
                {footer && (
                    <CardFooter className="border-t border-blue-gray-50 px-6 py-5">
                        {footer}
                    </CardFooter>
                )}
            </div>
        </Card>
    );
}

export default StatisticsChart;
