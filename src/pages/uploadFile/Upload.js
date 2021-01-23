import React from "react"
import Uppy from "@uppy/core"
import Tus from "@uppy/tus"
import { Dashboard } from "@uppy/react"
import "@uppy/dashboard/dist/style.css"

function Upload(props) {
    const uppy = new Uppy({
        meta: props.meta || {},
        restrictions: {
            maxNumberOfFiles: props.maxNumberOfFiles || null,
            allowedFileTypes: props.allowedFileTypes || null,
            maxFileSize: props.maxFileSize || null, //  byte
        },
        autoProceed: props.autoProceed || false,
    })

    uppy.use(Tus, { endpoint: props.endpoint })

    uppy.on("complete", (result) => {
        // const url = result.successful[0].uploadURL
        console.log(result)
        props.onComplete && props.onComplete(result)
    })

    return (
        <div>
            <Dashboard
                uppy={uppy}
                locale={{
                    strings: {
                        dropPaste: "Drag to here %{browse}",
                        browse: "Uploade",
                        poweredBy2: "Powered by Jiajie",
                    },
                }}
            />
        </div>
    )
}

export default Upload
