import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { candidateRequestAtom } from '../../../../store/admin';
import { useAtom } from 'jotai';
import { updateCandidateRequest } from '../../../../services/admin/candidateService';
import toast from 'react-hot-toast';

const CandidateRequestDetail = ({ opened, setOpened, fetchRequests }) => {
    const [selectedCandidateRequest] = useAtom(candidateRequestAtom);

    const handleClose = () => {
        console.log(selectedCandidateRequest);
        setOpened(false);
    };

    const handleAccept = async (status) => {
        try {
            const requestBody = {
                status: status,
            };
            const response = await updateCandidateRequest(selectedCandidateRequest._id, requestBody);
            toast.success(`Request ${status} successfully`);
            fetchRequests();
        } catch (error) {
            console.log(error.message);
        }
    };

    const convertToReadableTime = (submitTime) => {
        const date = new Date(submitTime);

        // Options for formatting the date and time
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short',
        };

        // Format the date and time
        return date.toLocaleString(undefined, options);
    };

    const handleViewDocument = (doc) => {
        const url = `/admin/dashboard/pdf/${selectedCandidateRequest._id}`;

        localStorage.setItem('state', JSON.stringify(doc));

        // Open the URL in a new tab
        window.open(url, '_blank');
    };

    return (
        <Dialog open={opened} onClose={handleClose}>
            <DialogTitle>Candidate approval request</DialogTitle>
            <DialogContent className="w-[30rem]">
                <p className="font-bold">Candidate Id:</p>
                <p>{selectedCandidateRequest.accountId}</p>
                <p className="font-bold">Request status:</p>
                <p>{selectedCandidateRequest.status}</p>
                <p className="font-bold">Submit Time</p>
                <p>{convertToReadableTime(selectedCandidateRequest.submitTime)}</p>
                <p className="font-bold">Document</p>
                <Button
                    variant="contained"
                    onClick={() => {
                        handleViewDocument(selectedCandidateRequest?.proof);
                    }}
                >
                    View Document
                </Button>
            </DialogContent>
            {selectedCandidateRequest.status !== 'Accepted' && selectedCandidateRequest.status !== 'Rejected' ? (
                <DialogActions style={{ paddingTop: '5em' }}>
                    <Button onClick={() => handleAccept('Rejected')} variant="outlined">
                        Reject
                    </Button>
                    <Button onClick={() => handleAccept('Accepted')} variant="contained">
                        Approve
                    </Button>
                </DialogActions>
            ) : null}
        </Dialog>
    );
};

export default CandidateRequestDetail;
