import React from "react";
import cookie from 'cookie';

export async function getServerSideProps(context) {
    const cookies = cookie.parse(context.req.headers.cookie || '')
    const myCookie = cookies['myCookie']

    if (myCookie) {
        const myCookieValue = JSON.parse(myCookie);
        const {
            gBook,
            bBook,
            pBook,
            gFilm,
            bFilm,
            pFilm,
            stag1Mat,
            stag2Mat,
            stag3Mat,
            stag4Mat,
            stag5Mat,
            stag6Mat,
            stag7Mat,
            stag8Mat,
            stag9Mat,
            stag10Mat,
            stag11Mat,
            stag12Mat,
            stag13Mat,
            stag14Mat,
            stag15Mat,
            stag16Mat,
            stag17Mat,
            gABPMat,
            bABPMat,
            pABPMat,
            gAFGMat,
            bAFGMat,
            pAFGMat,
            gDSWMat,
            bDSWMat,
            pDSWMat,
            gDSZMat,
            bDSZMat,
            pDSZMat,
            gEMat,
            bEMat,
            pEMat,
            gHRSMat,
            bHRSMat,
            pHRSMat,
            gHTRMat,
            bHTRMat,
            pHTRMat,
            gNACMat,
            bNACMat,
            pNACMat,
            gNGMMat,
            bNGMMat,
            pNGMMat,
            gPSZMat,
            bPSZMat,
            pPSZMat,
            gPCSTPMat,
            bPCSTPMat,
            pPCSTPMat,
            gHMat,
            bHMat,
            pHMat,
            DMat,
            EFMat,
            DSMat,
            BMat,
        } = myCookieValue

        return {
            props: {
                myCookieValue,
            },
        }
    } else {
        return {
            props: {
                myCookieValue: null,
            }
        }
    }
}