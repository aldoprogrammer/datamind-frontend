import React, { useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import CustomButton from '../../../../components/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import WhyThisPopularModal from '../../../../components/modal/WhyThisPopularModal';


const WhyPopularTabsCatalog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // State variable to manage modal visibility

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Card className="mt-6 lg:w-96 p-4 py-10 h-auto w-11/12 mx-auto">
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    Most Popular Items
                </Typography>
                <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2 min by
                    walk and near to &quot;Naviglio&quot; where you can enjoy the main
                    night life in Barcelona.
                </Typography>
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                    alt="ui/ux review check"
                    className='w-4/5 h-4/5 rounded-md mx-auto my-4 shadow-md'
                />
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center mt-2">
                    Title Product
                </Typography>
                <Typography className='mb-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
                {/* Button to open the modal */}
                <CustomButton onClick={handleOpenModal}>
                    <FontAwesomeIcon icon={faLightbulb} className="h-5 w-5 mr-2" />
                    Prompt: Why this product is popular?
                </CustomButton>

                {/* Modal component */}
                <WhyThisPopularModal isOpen={isModalOpen} handleClose={handleCloseModal} />
            </Card>
        </div>
    );
}

export default WhyPopularTabsCatalog;
