import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAtom } from 'jotai';
import { electionDetailAtom } from '../../../../../store/admin';

const CurrentElectionDetail = ({ opened, setOpened }) => {
    const [selectionElectionDetail] = useAtom(electionDetailAtom);

    const handleClose = () => {
        setOpened(false);
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

    return (
        <Dialog open={opened} onClose={handleClose}>
            <DialogTitle>Election details</DialogTitle>
            <DialogContent className="w-[30rem]">
                {selectionElectionDetail && (
                    <>
                        <p className="font-bold">Election type:</p>
                        <p>{selectionElectionDetail.electionType}</p>
                        <p className="font-bold">Constituencies:</p>
                        <p>
                            {selectionElectionDetail.constituencies && selectionElectionDetail.constituencies.length > 0
                                ? selectionElectionDetail.constituencies.map((item) => <p>{item}</p>)
                                : null}
                        </p>
                        <p className="font-bold">Start time:</p>
                        <p>{convertToReadableTime(selectionElectionDetail.electionTime)}</p>
                        <p className="font-bold">Candidates:</p>
                        <p>
                            {selectionElectionDetail.candidates && selectionElectionDetail.candidates.length > 0
                                ? selectionElectionDetail.candidates.map((item) => <p>{item.candidateId}</p>)
                                : null}
                        </p>
                    </>
                )}
            </DialogContent>
            <DialogActions style={{ paddingTop: '5em' }}>
                <Button onClick={handleClose}>Cancel</Button>
                {/* <Button onClick={handleClose}>Approve</Button> */}
            </DialogActions>
        </Dialog>
    );
};

export default CurrentElectionDetail;
