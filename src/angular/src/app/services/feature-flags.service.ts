import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {

    http = inject(HttpClient);
    features = signal<Record<string, boolean>>({});

    loadFeatureFlags(): Observable<FeatureFlagResponse> {
        return this.http.get<FeatureFlagResponse>('/features').pipe(tap((features) => this.features.set(features)));
    }

    getFeature(feature: FeatureFlagKeys): boolean {
        return this.features()[feature] ?? false;
    }
}

type _FeatureFlagKeys = keyof FeatureFlagResponse;
export type FeatureFlagKeys = { [K in _FeatureFlagKeys]: K; }[_FeatureFlagKeys]

export type FeatureFlagResponse = {
    ShowUserPage: boolean;
}