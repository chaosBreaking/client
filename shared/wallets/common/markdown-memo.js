// @flow
import * as React from 'react'
import * as Kb from '../../common-adapters'
import * as Styles from '../../styles'

type Props = {
  memo: string,
  style?: Styles.StylesCrossPlatform,
}

const MarkdownMemo = (props: Props) =>
  props.memo ? (
    <Kb.Box2
      direction="horizontal"
      gap="small"
      fullWidth={true}
      style={Styles.collapseStyles([props.style, styles.container])}
    >
      <Kb.Divider vertical={true} style={styles.quoteMarker} />
      <Kb.Markdown style={styles.memo} allowFontScaling={true}>
        {props.memo}
      </Kb.Markdown>
    </Kb.Box2>
  ) : null

const styles = Styles.styleSheetCreate({
  container: {
    marginBottom: Styles.globalMargins.xxtiny,
    marginTop: Styles.globalMargins.xxtiny,
    maxWidth: '100%',
  },
  memo: Styles.platformStyles({
    // Taken from text message styling
    common: {
      maxWidth: '100%',
      width: '100%',
    },
    isElectron: {
      cursor: 'text',
      userSelect: 'text',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
    },
    isMobile: {
      color: Styles.globalColors.black_75,
    },
  }),
  quoteMarker: {maxWidth: 3, minWidth: 3},
})

export default MarkdownMemo
