import { AssetDB } from "@editor/asset-db";
import { Meta } from "@editor/asset-db/libs/meta";
import { deprecate } from "util";
import { AssetInfo, IAssetWorkerInfo } from "../private";
import { IAsset } from './asset';
import { QueryAssetsOption } from '../public';
import EventEmitter from "events";

declare global {
    const Manager: IAssetWorkerManager;
}

export declare class AssetManager extends EventEmitter {
    queryAssetUsers(uuid: string): string[] | PromiseLike<string[]>;
    queryAssetInfos: (options?: QueryAssetsOption, dataKeys?: string[]) => IAssetInfo[];
    queryAssets: (options?: QueryAssetsOption) => IAsset[];
    queryAsset: (uuid: string) => IAsset;
    queryAssetProperty: (asset: IAsset, property: (keyof IAssetInfo | 'depends' | 'dependScripts' | 'dependedScripts')) => any;
    queryAssetProperty: (asset: IAsset, property: 'depends') => string[];
    queryAssetProperty: (asset: IAsset, property: 'library') => Record<string, string>;
    queryAssetInfo: (uuid: string, dataKeys?: string[]) => Promise<IAssetInfo | null>;
    queryAssetMeta: (uuid: string) => Meta | null;
    queryDBAssetInfo: (name: string) => IAssetInfo | null;
    queryAssetMtime: (uuid: string) => number | null;
    queryAssetDependencies: (uuid: string, type: 'asset' | 'script' = 'asset') => Promise<string[]>;
    encodeAsset: (asset: Asset | VirtualAsset) => IAssetInfo;
}

export interface IAssetWorkerManager {
    /**
     * @deprecated use `Manager.assetDBManager.assetDBMap` instead
     */
    AssetWorker: Record<string, AssetDB>;
    AssetInfo: IAssetWorkerInfo;
    assetDBManager: {
        pause(source: string): Promise<boolean>;
        resume(): Promise<boolean>;
        assetDBMap: Record<string, AssetDB>;
        readonly ready: boolean;
    },
    Utils: {
        url2uuid(url: string): string;
        url2path(url: string): string;
        path2url(url: string, dbName?: string): string;
    },
    assetManager: AssetManager;
}