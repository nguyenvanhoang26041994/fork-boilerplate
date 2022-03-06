/* eslint-disable */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';

const appBootrapNode = document.querySelector('#reactSharingComponent');
const tagMemo = {};

const registerWebComponent = (
  tagName,
  { connectedCallback, disconnectedCallback },
) => {
  if (tagMemo[tagName]) {
    return true;
  }
  class CustomWebComponent extends HTMLElement {
    connectedCallback() {
      appBootrapNode.dispatchEvent(
        new window.CustomEvent(`${tagName}-did-mount`, { detail: tagName }),
      );
      connectedCallback && connectedCallback(this);
    }

    disconnectedCallback() {
      appBootrapNode.dispatchEvent(
        new window.CustomEvent(`${tagName}-will-unmounting`, {
          detail: tagName,
        }),
      );
      disconnectedCallback && disconnectedCallback(this);
    }
  }
  window.customElements.define(tagName, CustomWebComponent);
  tagMemo[tagName] = true;
  return tagMemo[tagName];
};

const withWCPortal = (Component, {
  tagName,
  defaultProps,
  connectedCallback,
  disconnectedCallback,
}) => {
  const WCPortal = () => {
    const ref = useRef();
    const injected = useRef();
    const [props, setProps] = useState(defaultProps || {});
    const [shouldRender, setShouldRender] = useState(false);

    const checkNodeExistToRender = useCallback(() => {
      ref.current = document.querySelector(tagName);
      if (ref.current) {
        setShouldRender(true);
      } else {
        setShouldRender(false);
      }
    }, [ref, setShouldRender]);

    // check wc in Real DOM to render Vitural DOM
    useEffect(() => {
      registerWebComponent(tagName, {
        connectedCallback,
        disconnectedCallback,
      });
      checkNodeExistToRender();
    }, [checkNodeExistToRender]);
  
    useEffect(() => {
      appBootrapNode.addEventListener(
        `${tagName}-did-mount`,
        checkNodeExistToRender,
      );
      appBootrapNode.addEventListener(
        `${tagName}-will-unmounting`,
        checkNodeExistToRender,
      );

      return () => {
        appBootrapNode.removeEventListener(
          `${tagName}-did-mount`,
          checkNodeExistToRender,
        );
        appBootrapNode.removeEventListener(
          `${tagName}-will-unmounting`,
          checkNodeExistToRender,
        );
      };
    }, [checkNodeExistToRender]);

    // wc instance
    useEffect(() => {
      const wcNode = document.querySelector(tagName);
      if (wcNode) {
        wcNode._ref = {
          input: {
            props,
            setProps: (_props) => {
              setProps((prev) => {
                return {
                  ...prev,
                  ..._props
                };
              });
            },
            setPureProps: setProps,
          },
          injected,
        };
      }
    });

    if (!shouldRender) {
      return null;
    }
    return ReactDOM.createPortal(<Component {...props} ref={injected} />, ref.current);
  };

  WCPortal.propTypes = {};
  WCPortal.defaultProps = {};
  return WCPortal;
};

export default withWCPortal;

/*
  const CandidateQuickViewShared = React.forwardRef(({
    candidateId,
    onCandidateLoaded,
  }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = useCallback(() => {
      setIsOpen(false);
    }, [setIsOpen]);

    const doSomethingAndWantExportToOutside = () => {};

    useImperativeHandle(ref, () => ({
      setIsOpen,
      doSomethingAndWantExportToOutside
    }));
    return (
      <CandidateQuickView
        candidateId={candidateId}
        isOpen={isOpen}
        onClose={onClose}
        onLoaded={onCandidateLoaded}
      />
    )
  })

  withWCPortal(CandidateQuickViewShared, {
    tagName: 'wc-candidate-quick-view',
    defaultProps: {
      candidateId: null,
      onCandidateLoaded: f => f,
    },
  });

  // from stafflingboss
  // render <wc-candidate-quick-view></wc-candidate-quick-view> inside jsp
  const onCandidateLoaded = (candidateDetailData) => {
    // DO Something
  };
  const openQuickView = (candidateId) => {
    document.querySelector('wc-candidate-quick-view>')._ref.input.setProps({
      candidateId,
      onCandidateLoaded,
    });
    document.querySelector('wc-candidate-quick-view>')._ref.injected.current.setIsOpen(true);
  };

  const doSomethingAndWantExportToOutside = () => {
    document.querySelector('wc-candidate-quick-view>')._ref.injected.current.doSomethingAndWantExportToOutside();
  };
*/
