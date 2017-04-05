const src = `${CMWN.MEDIA.VIDEO}litterbug.mp4`;

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="video"
        >
            <skoash.Component ref="center" className="center">
                <skoash.Component ref="frame" className="frame">
                    <skoash.Video ref="video" src={src} />
                </skoash.Component>
            </skoash.Component>
        </skoash.Screen>
    );
}
